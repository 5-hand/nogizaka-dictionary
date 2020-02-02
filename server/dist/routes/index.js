"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = __importDefault(require("./loginRoutes"));
var userRoutes_1 = __importDefault(require("./userRoutes"));
var errorRoutes_1 = __importDefault(require("./errorRoutes"));
var memberRoutes_1 = __importDefault(require("./memberRoutes"));
var searchRoutes_1 = __importDefault(require("./searchRoutes"));
var talkRoutes_1 = __importDefault(require("./talkRoutes"));
var loginController_1 = __importDefault(require("../controllers/loginController"));
var router = express_1.default.Router();
router.use("/login", loginRoutes_1.default);
router.use("/", loginController_1.default.verifyJWT);
router.use("/user", userRoutes_1.default);
router.use("/member", memberRoutes_1.default);
router.use("/search", searchRoutes_1.default);
router.use("/talk", talkRoutes_1.default);
router.use("/", errorRoutes_1.default);
exports.default = router;