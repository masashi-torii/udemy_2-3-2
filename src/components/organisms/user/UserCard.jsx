import React, { memo } from "react"
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
    // console.log("UserCard");

    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
})

const SDl = styled.dl`
    text-align: left;
    margin-bottonm: 0px;
    dt {
        float: left;
    }
    dd{
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: breack-word;
    }
`