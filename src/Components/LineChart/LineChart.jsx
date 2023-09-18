import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { student: 1, name: "Alice", physics: 78, math: 82, english: 88, chemistry: 75 },
        { student: 2, name: "Bob", physics: 85, math: 91, english: 79, chemistry: 87 },
        { student: 3, name: "Charlie", physics: 92, math: 88, english: 94, chemistry: 90 },
        { student: 4, name: "David", physics: 76, math: 79, english: 82, chemistry: 78 },
        { student: 5, name: "Eve", physics: 89, math: 94, english: 88, chemistry: 91 },
        { student: 6, name: "Frank", physics: 67, math: 72, english: 75, chemistry: 68 },
        { student: 7, name: "Grace", physics: 94, math: 89, english: 95, chemistry: 92 },
        { student: 8, name: "Hannah", physics: 80, math: 85, english: 87, chemistry: 81 },
        { student: 9, name: "Ivy", physics: 88, math: 92, english: 90, chemistry: 87 },
        { student: 10, name: "Jack", physics: 73, math: 76, english: 80, chemistry: 72 }
      ];
      


    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics" stroke="#8884d8"></Line>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey="english" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;