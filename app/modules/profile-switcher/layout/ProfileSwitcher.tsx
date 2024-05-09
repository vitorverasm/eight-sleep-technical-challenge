import { Box, Text } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useUsers } from "../../user/hooks/useUsers";
import UserCard from "../../user/layout/components/UserCard";
import { useProfile } from "../hooks/useProfile";

function ProfileSwitcher() {
  const { currentUser, signInUser } = useProfile();

  const { users, isLoading } = useUsers();

  return (
    <Screen>
      <Box p={"$4"} alignItems="center">
        <Title>Choose your profile</Title>

        <Box mt={"$8"} width={"$full"} height="$full">
          {isLoading && <Text>...Loading</Text>}

          {users && users?.length > 0 ? (
            <FlatList
              contentContainerStyle={{ gap: 16 }}
              data={users}
              renderItem={({ item: user }) => (
                <UserCard.Card
                  onPress={() => {
                    if (!currentUser) {
                      signInUser(user);
                    }
                  }}
                  states={{ checked: currentUser?.id === user.id }}
                >
                  <UserCard.Title>{user.name}</UserCard.Title>
                  <UserCard.Description>{user.email}</UserCard.Description>
                </UserCard.Card>
              )}
            />
          ) : null}
        </Box>
      </Box>
    </Screen>
  );
}

export default ProfileSwitcher;
