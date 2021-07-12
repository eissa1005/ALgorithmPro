﻿namespace ALgorithmsys {
    export enum TimeUoM {
        Hour = 1,
        Day = 2,
        Week = 3,
        Month = 4,
        CalenderMonth = 5,
        Year = 6
    }
    Serenity.Decorators.registerEnumType(TimeUoM, 'ALgorithmsys.TimeUoM', 'TimeUoM');
}
