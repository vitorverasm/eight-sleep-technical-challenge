import { Box, Text } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import Screen from "../../../shared/layout/components/Screen";
import Title from "../../../shared/layout/components/Title";
import { useUsers } from "../../user/hooks/useUsers";
import UserCard from "../../user/layout/components/UserCard";
import { useProfile } from "../hooks/useProfile";
import { useFavoritesStore } from "../state/useFavoritesStore";

function ProfileSwitcher() {
  const { currentUser, signInUser } = useProfile();

  const { users, isLoading } = useUsers();
  const { toggleFavorite, checkFavorite } = useFavoritesStore();

  return (
    <Screen>
      <Box p={"$4"} alignItems="center">
        <Title>Choose your profile</Title>

        <Box mt={"$8"} width={"$full"} height={"$full"}>
          {isLoading && <Text>...Loading</Text>}

          {users && users?.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 16, paddingBottom: 120 }}
              data={users}
              renderItem={({ item: user }) => (
                <UserCard.Card
                  onFavoritePress={() => toggleFavorite(user.id)}
                  isFavorite={checkFavorite(user.id)}
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
