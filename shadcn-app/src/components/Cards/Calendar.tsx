'use client';

import { ResponsiveTimeRange } from '@nivo/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'; 

function generateDataForYear2023() {
    const data = [];
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-12-12");
    const dayInMs = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / dayInMs);

    for (let i = 0; i <= totalDays; i++) {
        const currentDate = new Date(startDate.getTime() + i * dayInMs);
        const formattedDate = currentDate.toISOString().split('T')[0]; 
        const value = Math.floor(Math.random() * 100); 
        data.push({ day: formattedDate, value });
    }

    return data;
}


export default function Calendar() {
    const data = generateDataForYear2023();

    return (
        <Card >
            <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                    <CardDescription>These are the numbers of this year</CardDescription>
            </CardHeader>
            <CardContent className="h-[80px] w-full">
                <ResponsiveTimeRange
                    data={data}
                    from="2023-01-01"
                    to="2023-12-12"
                    emptyColor="#eeeeee"
                    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                />
            </CardContent>
        </Card>
    );
}