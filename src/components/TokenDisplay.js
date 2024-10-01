import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import './TokenDisplay.scss';

const TokenDisplay = () => {
    const [tokens, setTokens] = useState(0);

    const addTokens = () => setTokens(tokens + 1);
    const deductTokens = () => tokens > 0 && setTokens(tokens - 1);

    return (
        <div className="token-display">
            <motion.h2
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
            >
                Tokens: {tokens}
            </motion.h2>
            <div className="buttons">
                <button onClick={addTokens}>Add Token</button>
                <button onClick={deductTokens}>Use Token</button>
            </div>
        </div>
    );
};

export default TokenDisplay;
