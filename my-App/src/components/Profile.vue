<template>
    <div>
        <h2>Profile</h2>
        <p>Name: {{ profile.name }}</p>
        <p>Age: {{ profile.age }}</p>
        <p>Email: {{ profile.email }}</p>
        <p>City: {{ profile.city }}</p>
        <p>Phone: {{ profile.phone }}</p>
        <p>Address: {{ profile.address }}</p>
        <button @click="updateProfile">Update Profile</button>
        <button @click="deleteProfile">Delete Profile</button>
        <button @click="logout">Logout</button>
        <router-link to="/">Home</router-link>
        <router-link to="/edit">Edit Profile</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            profile: {},
            updatedProfile: {},
            isUpdating: false
        }
    },
    created() {
        this.getProfile();
    },
    methods: {
        getProfile() {
            // Fetch profile data from API
            // Replace with actual API call
            this.profile = {
                name: 'John Doe',
                age: 30,
                email: 'johndoe@example.com',
                city: 'New York',
                phone: '123-456-7890',
                address: '123 Main St'
            }
        },
        updateProfile() {
            this.isUpdating = true;
        },
        saveProfile() {
            // Update profile data on API
            // Replace with actual API call
            this.isUpdating = false;
            this.getProfile(); // Update profile data in-memory
        },
        deleteProfile() {
            // Delete profile data from API
            // Replace with actual API call
            // Redirect to home page after deletion
            this.$router.push('/');
        },
        logout() {
            // Logout user
            // Replace with actual logout logic
            this.$router.push('/');
        }
    }
};
</script>