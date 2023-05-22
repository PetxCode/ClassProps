
import styled from 'styled-components'
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { useState } from 'react'

const ContactPage = () => {
    const [count, setCount] = useState<number>(0)

    const onAdd = () => {
        return setCount((el: number) => el + 1)
    }

    const onRemove = () => {
        return setCount((el: number) => el - 1)
    }

    return (
        <div>
            <Container>
                <Main>
                    <Icon t="" onClick={onAdd} />
                    <Count>{count}</Count>
                    <Icon t="e" onClick={onRemove} />
                </Main>
            </Container>
        </div>
    )
}

export default ContactPage

const Icon = styled(BsFillArrowUpSquareFill) <{ t: string }>`
font-size: 30px;
color: white;
transform: ${({ t }) => t ? "rotate(180deg)" : "rotate(0deg)"} ;
transition: all 350ms;

:hover{
    cursor: pointer;  
}
`

const Count = styled.div`
font-size:360px;
font-weight: 500;
line-height: 1;
`


const Main = styled.div`
width: 300px;
height: 500px;
background-color:#0a4887;
border-radius: 5px;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 80vh;
align-items: center;
`