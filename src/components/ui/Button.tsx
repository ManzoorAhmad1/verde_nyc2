const Button = ({ children, fill, stroke, className, onClick }: any) => {
    return (
        <div 
            className="relative z-10 h-full flex items-center justify-center group" 
            onClick={onClick}
        >
            <div className="text-center px-4">
                {/* Decorative SVG Frame */}
                <div className="relative inline-block">
                    <svg
                        viewBox="0 0 665 235"
                        fill="none"   
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-40 h-16 group-hover:[&>*:nth-child(2)]:fill-white group-hover:[&>*:nth-child(3)]:fill-white group-hover:[&>*:nth-child(2)]:stroke-black group-hover:[&>*:nth-child(3)]:stroke-black group-hover:[&>*:nth-child(4)]:stroke-black group-hover:[&>*:nth-child(5)]:stroke-black group-hover:[&>*:nth-child(6)]:stroke-black group-hover:[&>*:nth-child(7)]:stroke-black group-hover:[&>*:nth-child(8)]:stroke-black group-hover:[&>*:nth-child(9)]:stroke-black group-hover:[&>*:nth-child(10)]:stroke-black group-hover:[&>*:nth-child(11)]:stroke-black"
                    >
                        <path
                            d="M245.232 234.159H75.2612L1 160.629V74.0124L74.9685 1H590.033L664.478 75.3494V162.711L591.072 234.159H420.232"
                            stroke={stroke}
                            strokeWidth="2"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path
                            d="M245.232 227.02H78.9182L8.76006 157.642L8.76008 77.7714L79.5083 8.53452L585.399 8.53452L657.009 79.4561V158.411L587.551 227.02H420.732"
                            fill={fill}
                            strokeWidth="2.18897"
                            className="group-hover:fill-white group-hover:stroke-black transition-all duration-300"
                        />
                        <path
                            d="M50.2466 98.6733V136.901L102.792 189.094H562.317L615.227 137.595V99.637L561.569 46.0478H103.561L50.2466 98.6733Z"
                            stroke={stroke}
                            fill={fill}
                            strokeWidth="0.640618"
                            className="group-hover:fill-white group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M590.098 1.07301L561.605 46.085" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M75.1116 1.07301L103.604 46.085" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M75.3003 234.045L102.853 189.103" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M1.07652 160.679L50.2649 136.908" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M50.2671 98.7484L1.01831 74.0286" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M664.456 162.6L615.231 137.813" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M615.227 99.6612L664.539 75.3307" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                        <path 
                            d="M590.892 234.111L562.399 189.099" 
                            stroke={stroke} 
                            fill={fill} 
                            strokeWidth="0.640618"
                            className="group-hover:stroke-black transition-all duration-300"
                        />
                    </svg>

                    {/* Logo in center */}
                    <div className={`absolute inset-0 flex items-center justify-center text-sm group-hover:text-black transition-all duration-300 ${className}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Button;