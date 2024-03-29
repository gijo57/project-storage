import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';
import { loadAuthenticatedUser } from '../services/user';

const Profile = styledComponents.div`
  color: ${(props) => props.theme.palette.primary.text};
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.background.component};
  border-radius: 5px;
  width: 70%;
  height: 40em;
  padding: ${(props) => props.theme.padding.element};
  margin: ${(props) => props.theme.margin.element};
  box-shadow: ${(props) => props.theme.shadow};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    background: transparent;
    box-shadow: none;
    margin: 0;
  }
`;

const Info = styledComponents.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media only screen and (max-width: 600px) {
    margin-top: 3em;
    width: 100%;
  }
`;

const Header = styledComponents.div`
  height: 10em;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Username = styledComponents.h2`
  color: ${(props) => props.theme.palette.primary.main};
`;

const Subtitle = styledComponents.h3`
  color: ${(props) => props.theme.palette.title.subtitle};
  margin-bottom: 1em;
`;

const ProfilePicture = styled(Avatar)`
  margin: 1em;
  height: 8em;
  width: 90%;

  % img {
    object-fit: contain;
  }
`;

const Section = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

const Button = styledComponents.button`
  margin: 0;
  padding: 1em 3em;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  align-self: flex-start;
  & * {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const Detail = styledComponents.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
  width: 100%;
`;

const ProfileView = ({ user }) => {
  return (
    user && (
      <Profile>
        <Header>
          {user.profilePicture && (
            <ProfilePicture
              variant="rounded"
              src={user.profilePicture}
              alt={`${user.username}'s profile`}
            />
          )}
          <Username>{user.username}</Username>
        </Header>
        <Info>
          <Section>
            <Subtitle>Personal details</Subtitle>
            <Detail>
              <strong>First name:</strong>
              <span>{user.fName}</span>
            </Detail>
            <Detail>
              <strong>Last name: </strong>
              <span>{user.lName}</span>
            </Detail>
          </Section>
          <Section>
            <Subtitle>Contact information</Subtitle>
            <Detail>
              <strong>Email: </strong>
              <span>{user.email}</span>
            </Detail>
            <Detail>
              <strong>Phone number: </strong>
              <span>{user.phoneNumber}</span>
            </Detail>
          </Section>
        </Info>
        <Button>
          <Link to="settings">Profile settings</Link>
        </Button>
      </Profile>
    )
  );
};

export default ProfileView;
