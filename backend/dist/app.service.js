"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const bcrypt = require("bcryptjs");
let AppService = class AppService {
    constructor(db) {
        this.db = db;
    }
    getHello() {
        return 'Hello World!';
    }
    async register(createUserDto) {
        try {
            const existingUser = await this.db.user.findFirst({ where: { username: createUserDto.username } });
            if (existingUser) {
                throw new Error('User with username already exists!');
            }
            const existingEmail = await this.db.user.findFirst({ where: { email: createUserDto.email } });
            if (existingEmail) {
                throw new Error('E-mail address is already used by one of the users!');
            }
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            console.log(hashedPassword);
            const newUser = await this.db.user.create({
                data: {
                    ...createUserDto,
                    password: hashedPassword,
                },
            });
            return newUser;
        }
        catch (error) {
            throw new Error(error.message || 'Failed to register user');
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map