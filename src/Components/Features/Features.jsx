import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({ features }) => {
    return (
        <div>
            <p className='flex gap-2  items-center'>
                <AiFillCheckCircle className='text-green-800'></AiFillCheckCircle>
                {features}
            </p>
        </div>
    );
};

Features.propTypes = {
    features: PropTypes.string
}

export default Features;