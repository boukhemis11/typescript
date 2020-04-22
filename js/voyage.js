"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejour = [
            new Sejour("Londres", 700),
            new Sejour("Rome", 500),
            new Sejour("Madrid", 400),
        ];
    }
    ;
    SejourService.prototype.findByNom = function (nom) {
        for (var _i = 0, _a = this.sejour; _i < _a.length; _i++) {
            var s = _a[_i];
            if (nom === s.nom) {
                return s;
            }
        }
        ;
    };
    return SejourService;
}());
var ssj = new SejourService();
console.log(ssj.findByNom('Madrid'));
