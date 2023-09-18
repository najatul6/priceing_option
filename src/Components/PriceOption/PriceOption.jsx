import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    const { price, name, features } = option;
    return (
        <div className='bg-slate-500 p-4 text-white rounded-lg space-y-5 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-semibold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='bg-slate-400 rounded-lg text-left p-2 flex-grow'>
                {
                    features.map((feature, index) => <Features key={index} features={feature}></Features>)
                }
            </div>
            <button className='py-2 bg-lime-800 hover:bg-lime-600 text-2xl uppercase rounded-lg font-medium w-full'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;