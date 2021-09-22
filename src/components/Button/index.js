import { Link } from "react-router-dom";
import styled from "styled-components";

    const ButtonCustom = styled(Link)`
        background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
        white-space: nowrap;
        outline: none;
        border: none;
        min-width: 100px;
        max-width: 200px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
        font-size: ${({ big }) => (big ? '20px' : '14px')};
        color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};

        &:hover {
            background: #cd853f;
            transform: translateY(-2px)
        }
    `
export default ButtonCustom;