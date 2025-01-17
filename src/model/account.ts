import { Static, Type } from "@sinclair/typebox";

export const accountSchema = Type.Strict(Type.Object({
    email: Type.String({ default: "" }),
    password: Type.String({ default: "" }),
    token: Type.String({ default: "" }),
    remember: Type.Boolean({ default: true }),
}));

export type AccountType = Static<typeof accountSchema>;