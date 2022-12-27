import { Date, DateExpression, Schema } from 'mongoose';
// export interface IChat extends IMessage, ICustomer, Document {
//     isFavorite: boolean,
// }
// export interface ICustomer extends IRegularCustomer, IVipCustomer, Document {
//     firstName: string,
//     lastName: string
// }
// export interface IRegularCustomer {
//     phoneNumber: string
// }
// export interface IVipCustomer {
//     creditCard: string
// }
// export interface IMessage extends ITextMessage, ILocationMessage, Document {
//     timestamp?: Date,
//     isReceived?: boolean,
// }
// export interface ILocationMessage {
//     latitud?: string,
//     longitud?: string
// }
// export interface ITextMessage {
//     text?: string
// }

class Chat {
    isFavorite: boolean;
    message?: Message;
    customer: Customer;
}

abstract class Message {
    timestamp: Date;
    isReceived: boolean;
}

class TextMessage extends Message {
    text: string;
}

class LocationMessage extends Message {
    latitud: number;
    longitud: number;
}

abstract class Customer {
    firstName: string;
    lastName: string;
}

class VipCustomer extends Customer {
    creditCard: string;
}

class RegularCustomer extends Customer {
    phoneNumber: string;
}
