
import z from "zod";

export const registerZod = z.object({
    userName: z.string()
        .min(3, 'Имя пользователя должно быть минимум 3 символа')
        .max(20, 'Имя пользователя слишком длинное (максимум 20 символов)'),
    
    email: z.string()
        .email('Введите корректный email (например, user@mail.com)'),
    
    
    firstName: z.string()
        .min(2, 'Имя должно содержать минимум 2 символа')
        .max(30, 'Имя слишком длинное (максимум 30 символов)'),
    
    lastName: z.string()
        .min(2, 'Фамилия должна содержать минимум 2 символа')
        .max(50, 'Фамилия слишком длинная (максимум 50 символов)'),
    
    phone: z.string()
        .min(10, 'Введите корректный номер телефона (минимум 10 цифр)')
        .max(20, 'Номер слишком длинный')
        .regex(/^[\+\d\s\-()]+$/, 'Используйте только цифры, +, пробелы, - и ()'),
    
    password: z.string()
        .min(8, 'Пароль должен быть минимум 8 символов')
        .max(100, 'Пароль слишком длинный')
        .regex(/[a-z]/, 'Должна быть минимум одна строчная буква (a-z)')
        .regex(/[A-Z]/, 'Должна быть минимум одна заглавная буква (A-Z)')
        .regex(/[!@#$%^&*]/, 'Должен быть минимум один спецсимвол (!@#$%^&*)'),

});

export const loginZod = z.object({
    email: z.string()
        .email('Введите корректный email')
        .transform((val) => val.toLowerCase().trim()),
    
    password: z.string()
        .min(1, 'Введите пароль')
        .max(100, 'Пароль слишком длинный'),
    
});


export type RegisterFormData = z.infer<typeof registerZod>;
export type LoginFormData = z.infer<typeof loginZod>;