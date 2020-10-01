import React from 'react'
import styled from 'styled-components'

// Styling
const AdminHeaderContainer = styled.header`
    width: 100%;
    height: auto;
    padding: 100px 0 20px 0;
    font-size: ${(props) => props.theme.fontSizes.large};
    text-align: center;

    h2 {
      font-family: ${(props) => props.theme.fontStyles.openSemiBold};
      color: ${(props) => props.theme.colors.textBlue};
      text-transform: ${(props) => props.theme.fontStyles.uppercase};
    }
`

const AdminHeader = () => {
    return (
        <AdminHeaderContainer>
            <h2>Admin Siden</h2>
        </AdminHeaderContainer>
    )
}

export default AdminHeader
