import styled from "styled-components";
import React from "react";
import { Avatar, Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const createChat = () => {
  const input = prompt(
      "Please enter an email address for the user you wish to chat with "
  );
  if (!input) return;
  if (EmailValidator.validate(input)) {
    // We need to add the chat into the DB "chats" collection
  }
  

  return (
    <div>
      <Container>
        <Header>
          <UserAvatar />
          <IconsContainer>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </IconsContainer>
        </Header>

        <Search>
          <SearchIcon />
          <SearchInput placeholder="Search in chats" />
        </Search>

        <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
      </Container>
    </div>
  );
}

// List of Chats

export default Sidebar;

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;