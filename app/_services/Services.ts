export const getUniqueRecord=(attendanceList:any)=>{
    const uniqueRecord:any[]=[]
    const existingUser =new Set()
    attendanceList?.forEach((record:any)=>{
        if(!existingUser.has(record.studentId)){
            existingUser.add(record.studentId)
            uniqueRecord.push(record)
        }
    })
    return uniqueRecord
}

export function generateChartData(allDataList:any) {
    const chartDataMap = new Map();

    allDataList.forEach((data:any) => {
        const category = data.category;
        const amount = data.amount;

        if (!chartDataMap.has(category)) {
            chartDataMap.set(category, { category: category, amount: amount });
        } else {
            chartDataMap.get(category).amount += amount;
        }
    });

    // Convert map to array of objects with optional amount property
    const chartData = Array.from(chartDataMap.values()).map(item => {
        if (item.amount === undefined) {
            return { category: item.category };
        }
        return item;
    });

    return chartData;
}

export function combineGenderAmounts(allDataList:any) {
    // Create an object to store total amounts by gender
    const genderTotals = {
        male: 0,
        female: 0
    };

    // Iterate through the list and accumulate amounts based on gender
    allDataList.forEach((data:any) => {
        if (data.gender === 'M') {
            genderTotals.male += data.amount;
        } else if (data.gender === 'F') {
            genderTotals.female += data.amount;
        }
    });

    // Convert the result to the desired format
    const result = [
        { gender: "male", amount: genderTotals.male },
        { gender: "female", amount: genderTotals.female }
    ];

    return result;
}



interface DataItem {
    id: number;
    category: string;
    gender: 'M' | 'F';
    amount: number;
}

interface CategoryTotals {
    maleCount: number;
    femaleCount: number;
}

interface ChartData {
    category: string;
    male: number;
    female: number;
    fill: string;
}

export function generatePieChartDataForCategories(allDataList: DataItem[], categories: string[]): ChartData[] {
    // Create an object to store the counts by category and gender
    const categoryTotals: { [key: string]: CategoryTotals } = {};
    const colorMappings: { [key: string]: string } = {
        es_transportation: "hsl(var(--chart-1))",
        es_health: "hsl(var(--chart-2))",
        es_food: "hsl(var(--chart-3))"
    };
    // Initialize counts for each category
    categories.forEach(category => {
        categoryTotals[category] = { maleCount: 0, femaleCount: 0 };
    });

    // Iterate through the list and count occurrences by category and gender
    allDataList.forEach(data => {
        if (categories.includes(data.category)) {
            if (data.gender === 'M') {
                categoryTotals[data.category].maleCount += 1;
            } else if (data.gender === 'F') {
                categoryTotals[data.category].femaleCount += 1;
            }
        }
    });

    // Convert the result to the desired format
    const chartData: ChartData[] = categories.map(category => ({
        category: category,
        male: categoryTotals[category].maleCount,
        female: categoryTotals[category].femaleCount,
        fill: colorMappings[category] // Assuming colors are based on the category suffix
    }));

    return chartData;
}

export function aggregateData(allDataList: any[]): { category: string; male: number; female: number; amount: number }[] {
    // Create an object to store the aggregated data by category
    const aggregatedData: { [key: string]: { male: number; female: number; amount: number } } = {};

    // Iterate through the list and accumulate data by category
    allDataList.forEach(data => {
        const category = data.category;
        if (!aggregatedData[category]) {
            aggregatedData[category] = { male: 0, female: 0, amount: 0 };
        }
        if (data.gender === 'M') {
            aggregatedData[category].male += 1;
        } else if (data.gender === 'F') {
            aggregatedData[category].female += 1;
        }
        aggregatedData[category].amount += data.amount;
    });

    // Convert the result to the desired format
    const chartData = Object.keys(aggregatedData).map(category => {
        return {
            category: category,
            male: aggregatedData[category].male,
            female: aggregatedData[category].female,
            amount: aggregatedData[category].amount
        };
    });

    return chartData;
}


const colorArray = [
    { range: "1-2", color: "hsl(var(--chart-1))" },
    { range: "2-7", color: "hsl(var(--chart-2))" },
    // Add more age ranges and colors as needed
];

// Function to generate age group data using the color array
export function generateAgeGroupData(allDataList: any) {
    // Define the age ranges and their corresponding colors
    const ageGroups = [
        { range: "1-2", minAge: 1, maxAge: 2 },
        { range: "2-7", minAge: 2, maxAge: 7 },
        // Add more age ranges and colors as needed
    ];

    // Initialize the totals for each age group
    const ageGroupTotals: { [key: string]: number } = {};
    ageGroups.forEach(group => {
        ageGroupTotals[group.range] = 0;
    });

    // Aggregate the amounts by age group
    allDataList.forEach((data: any) => {
        const age = parseInt(data.age, 10);
        for (const group of ageGroups) {
            if (age >= group.minAge && age <= group.maxAge) {
                ageGroupTotals[group.range] += data.amount;
                break;
            }
        }
    });

    // Convert the result to the desired format
    const chartData = ageGroups.map(group => {
        // Find the color for the current age group
        const color = colorArray.find(c => c.range === group.range)?.color || "gray";

        return {
            agegroup: group.range,
            amount: ageGroupTotals[group.range],
            fill: color
        };
    });

    return chartData;
}