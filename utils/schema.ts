import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const GRADES=mysqlTable('grades',{
    id:int('id').primaryKey(),
    grade:varchar('grade',{length:10}).notNull()
})

export const STUDENTS=mysqlTable('students',{
    id:int('id').autoincrement().primaryKey(),
    fullName:varchar('fullName',{length:20}).notNull(),
    grade:varchar('grade',{length:10}).notNull(),
    address:varchar('address',{length:50}),
    contactNumber:varchar('contactNumber',{length:10})
})

export const ATTENDANCE = mysqlTable('attendance',{
    id:int('id').autoincrement().primaryKey(),
    studentId:int('studentId').notNull(),
    present:boolean('present').default(false),
    day:int('day').notNull(),
    date:varchar('date',{length:20}).notNull()

})

export const FINANCE = mysqlTable('finance',{
    id:int('id').autoincrement().primaryKey(),
    step:int('step'),
    customer:varchar('customer',{length:50}),
    age:varchar('age',{length:50}),
    gender:varchar('gender',{length:2}),
    zipcodeOri:varchar('zipcodeOri',{length:50}),
    merchant:varchar('merchant',{length:50}),
    zipMerchant:varchar('zipMerchant',{length:50}),
    category:varchar('category',{length:50}),
    amount:int('amount'),
    fraud:int('fraud'),


})