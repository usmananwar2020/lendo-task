import React from 'react'

interface RoundButtonProps {
    label: string;
    variant?: "primary" | "light" | "danger"; // default = primary
    onClick?: () => void;
}


const CustomButton = ({
    label,
    variant = "primary",
    onClick,
}: RoundButtonProps) => {
    const baseStyles =
        "px-6 py-2 rounded-full font-medium text-sm transition-all duration-300";

    const variantStyles =
        variant === "primary"
            ? "bg-[#2D91FE] text-white":
            variant === "danger" ?
            "bg-[#FF6769] text-white"
            :"bg-white text-gray-500 border border-gray-300";
    return (
        <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
            {label}
        </button>
    )
}

export default CustomButton