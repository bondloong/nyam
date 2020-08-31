import React from 'react'
import s from 'styled-components'
import cat from './cat.png'


const Card = s.div`
    &:after {
        content: "";
        position: absolute;
        width: calc(99% - 1px);
        right: 0;
        z-index: -1;
        height: 8%;
        top: 0px;
        border-style: solid;
        border-color: ${props => props.color};
        border-width: 4px 0 0px 7px;
        transform: skew(-45deg);
        transform-origin: left bottom;
        background-color: white;
    }
    &:before {
        content: "";
        position: absolute;
        width: calc(100% - 4px);
        right: 0px;
        z-index: -1;
        height: calc(92% - 5px);
        bottom: 0px;
        border-style: solid;
        border-color: ${props => props.color};
        border-width: 0px 0 4px 4px;
        background-color: white;
    }
    width: 260px;
    position: relative;
    display: inline-block;
    height: 480px;
    padding-left: 40px;
    border-right: 4px solid ${props => props.color};
    overflow: hidden;
    border-radius: 10px;
`
const Nyam = s.h2`
    font-size: 35pt;
    margin: 0;
    font-weight: 600;
    opacity: ${props => props.have? '' : '0.4'};
`
const Title = s.p`
    font-size: 12pt;
    margin: 13px 0 0 0;
    color: gray;
    opacity: ${props => props.have? '' : '0.4'};
`
const Taste = s.p`
    font-size: 19pt;
    margin: 0;
    font-weight: 600;
    opacity: ${props => props.have? '' : '0.4'};
`

const Col = s.p`
    font-size: 10.4pt;
    margin: 10px 0 0 0;
    color: gray;
    opacity: ${props => props.have? '' : '0.4'};
`
const Prize = s.p`
    font-size: 10.4pt;
    margin: 0px;
    color: gray;
    opacity: ${props => props.have? '' : '0.4'};
`

const Weight = s.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-flow: column;
    font-size: 30pt;
    line-height: 28px;
    position: absolute;
    right: 15px;
    bottom: 20px;
    background-color: ${props => props.color};
    opacity: ${props => props.have? '' : '0.4'};
`

const CatImage = s.img`
    position: absolute;
    left: 4px;
    bottom: 4px;
    opacity: ${props => props.have? '' : '0.4'};
`

const KG = s.span`
    font-size: 18pt;
`

const Wrapper = s.div``

const Footer = s.p`
    text-align: center;
    font-size: 9.5pt;
    color: white;
    margin-bottom: 50px;
`
export default class TovarCard extends React.Component {
    constructor(props){
        super(props)
        this.state = props.item;

        this.HSH = this.HSH.bind(this);
        this.isSelected = this.isSelected.bind(this)
        this.footer = this.footer.bind(this)
    }

    HSH(){
        if (this.state.selected){
            return this.state.hover? '#e62e7a' : '#d91667'
        }else if (this.state.have){
            return this.state.hover? '#2ea8e6' : '#1698d9'
        }else {
            return 'gray;'
        }
    }
    
    isSelected(){
        if(this.state.have){
            this.setState({selected : !this.state.selected})
        }
    }

    footer(description, taste){
        if(this.state.selected){
            return description
        }else if (this.state.have){
            return <>Чего сидишь? порадуй котэ, <span style={{color: this.state.hover ? '#2ea8e6' : '#1698d9' ,
                 textDecoration: 'none', borderBottom: '2px dotted', cursor: 'pointer'}} onClick = {() => this.isSelected()} >купи.</span></>
        }else{
            return <span style={{color: 'yellow'}}> Печалька, c {taste} закончился.</span>
        }
    }

    render() {
        const have = this.state.have;
        return (
            <Wrapper>
            <Card   color = { this.HSH() } 
                    onClick = {() => this.isSelected()}
                    onMouseEnter = {() => this.setState({hover: true})}
                    onMouseLeave = {() => this.setState({hover: false})}
                    >
                {
                    have
                    ? 
                        this.state.hover && this.state.selected
                        ?
                        <Title style={{color: '#e62e7a' }}>Котэ не одобряет?</Title>
                        :
                        <Title have = {have}>Сказочное заморское яство</Title>
                    :
                    <Title have = {have}>Сказочное заморское яство</Title>
                }
                    

                <Nyam have = {have}>Нямушка</Nyam>
                <Taste have = {have}>c { this.state.taste }</Taste>
                <Col have = {have}>{ this.state.col } порций</Col>
                <Prize have = {have}>{ this.state.prize } в подарок</Prize>
                <CatImage have = {have} alt='' src={ cat }></CatImage>
                <Weight have = {have} color={ this.HSH() }>
                    { this.state.weight }
                    <KG>кг</KG>
                </Weight>
            </Card>
            <Footer>
                {
                    this.footer(this.state.description, this.state.taste)
                }
            </Footer>
            </Wrapper>
        )
    }
}
