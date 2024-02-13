// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.


export type User = {
    user_id: string;
    type_id: 'CC' | 'CE'| 'PP'| 'PJ'|'TI';
    name: string;
    email: string;
    user: string;
    phone: string;
    password: string;
};
export type Item = {
    open: any;
    setOpen: any;
    question: string;
    response: string;
    i: number;
}