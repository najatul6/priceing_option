import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar,  XAxis, YAxis, Tooltip } from 'recharts';
import { CirclesWithBar } from 'react-loader-spinner'


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const[loading, isLoading] = useState(true);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then (res=> res.json())
        // .then (data => console.log(data.data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phoneWithFakeData)
                isLoading(false)
            })
    }, []);
    return (
        <div>
            {loading && <div>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                />
            </div>}

            <h2 className="text-5xl text-center my-3"> Phones : {phones.length} </h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;