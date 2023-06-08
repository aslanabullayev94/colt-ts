"use strict";
//  ! ========================================================================================================================
//  ! ============================================== NARROWING WITH IN OPERATOR ==============================================
//  ! ========================================================================================================================
function getRuntime(media) {
    if ("numEpisodes" in media) {
        // * ts understands media can only be TVShow type
        media.numEpisodes = 10;
    }
}
//  ! ========================================================================================================================
//  ! ========================================== NARROWING WITH INSTANCEOF OPERATOR ==========================================
//  ! ========================================================================================================================
function printFullDate(date) {
    if (date instanceof Date) {
        return date.toUTCString();
    }
    return new Date(date).toUTCString();
}
// ================================================
class User {
    constructor(userName) {
        this.userName = userName;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        return entity.userName;
    }
}
function isCat(animal) {
    // * this syntax is binding return type with the logic of the function (function must return boolean)
    // * if function return true then ts willknow that returned value is the type of Cat
    // * if we delete "animal is Cat" part, then ts would not know what is the return type (check it on makeNoise function below)
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "meow";
    }
    return "woof";
}
