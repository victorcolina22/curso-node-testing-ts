"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Pepito Perez",
    },
];
function getUserById(id, callback) {
    const user = users.find((user) => user.id === id);
    if (!user)
        return callback(`USER not found ${id}`);
    return callback(undefined, user);
}
exports.getUserById = getUserById;
