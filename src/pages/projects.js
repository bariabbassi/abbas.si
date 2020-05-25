import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
    font-size: 3.5rem;
    font-weigt: 900;
    padding: 0;
`

const List = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Project = styled.h2`
    font-size: 2.2rem;
`



const ProjectsPage = () => {
    return (
        <Layout>
            <Title>Projects</Title>
            <List>
                <Project><span role="img" aria-label="Currency Exchange">💱</span> Currency Converter</Project>
                <Project><span role="img" aria-label="Money With Wings">💸</span> EmployeesWise</Project>
            </List>
        </Layout>
    )
}

export default ProjectsPage