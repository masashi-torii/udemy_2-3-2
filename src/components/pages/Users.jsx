import styled  from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: 'じゃけえ-${val}',
        image: "https://picsum.photos/150/160",
        email: "1234567@example.com",
        phone: "090-1234-4321",
        company: {
            name: "テスト株式会社"
        },
        website: "https://google.com"
    }
}))

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
            {users.map((user) => (
                <UserCard key={user.id} user={user}/>
            ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 24;
`;
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`