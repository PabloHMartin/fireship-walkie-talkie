<template>
  <div>
    <h3>Home</h3>
    <User v-slot:user="{ user }">
      <div v-if="user">
        
        <UserProfile :user="user" />
        
        <chatList :uid="user.uid" />

      </div>
      <Login v-else/>
    </User>
  </div>
</template>

<script>

import Login from './Login';
import User from './User';
import UserProfile from './UserProfile';
import chatList from './chatList';

export default {

  components: {
    Login,
    User,
    UserProfile,
    chatList
  }

}
</script>

<style>

</style>