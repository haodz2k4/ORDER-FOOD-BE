import status from "http-status";

export const DefaultStatusCode = status.OK
export const DefaultResponseMessage = 'success'

export enum CrudEnum {
    CREATE = 'create',
    READ = 'read',
    UPDATE = 'update',
    DELETE = 'delete'
}

export enum DayOfWeek {
    MON = 'MONDAY',
    TUES = 'TUESDAY',
    WED = 'WEDNESDAY',
    THUR = 'THURSDAY',
    FRI = 'FRIDAY',
    SAT = 'SATURDAY',
    SUN = 'SUNDAY'
}