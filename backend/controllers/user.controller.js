/**
* @typedef {import('../models/user')} User
*/

/**
* Get all users from the database
* @async
* @returns {Promise<Array<User>>} Array of user objects
* @throws {Error} If database query fails
*/
export async function getAllUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
}

/**
* Get a single user by their ID
* @async
* @param {string} id - The user's ID
* @returns {Promise<User>} The user object
* @throws {Error} If user is not found or database query fails
*/
export async function getUserById(id) {
    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}

/**
* Create a new user
* @async
* @param {Object} userData - The user data
* @param {string} userData.name - The user's name
* @param {string} userData.email - The user's email
* @param {string} userData.password - The user's password
* @returns {Promise<User>} The created user object
* @throws {Error} If user creation fails
*/
export async function createUser(userData) {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
}

/**
* Update a user by their ID
* @async
* @param {string} id - The user's ID
* @param {Object} updateData - The data to update
* @returns {Promise<User>} The updated user object
* @throws {Error} If user is not found or update fails
*/
export async function updateUser(id, updateData) {
    try {
        const user = await User.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
}

/**
* Delete a user by their ID
* @async
* @param {string} id - The user's ID
* @returns {Promise<User>} The deleted user object
* @throws {Error} If user is not found or deletion fails
*/
export async function deleteUser(id) {
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(`Failed to delete user: ${error.message}`);
    }
}

