//  ! ========================================================================================================================
//  ! ============================================== NARROWING WITH IN OPERATOR ==============================================
//  ! ========================================================================================================================

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    // * ts understands media can only be TVShow type
    media.numEpisodes = 10;
  }
}

//  ! ========================================================================================================================
//  ! ========================================== NARROWING WITH INSTANCEOF OPERATOR ==========================================
//  ! ========================================================================================================================

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    return date.toUTCString();
  }
  return new Date(date).toUTCString();
}

// ================================================

class User {
  constructor(public userName: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    return entity.userName;
  }
}

//  ! ======================================================================================================================
//  ! ========================================= NARROWING WITH PREDICATES OPERATOR =========================================
//  ! ======================================================================================================================

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: any): animal is Cat {
  // * this syntax is binding return type with the logic of the function (function must return boolean)
  // * if function return true then ts willknow that returned value is the type of Cat
  // * if we delete "animal is Cat" part, then ts would not know what is the return type (check it on makeNoise function below)
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return "meow";
  }
  return "woof";
}
