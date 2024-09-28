import userAvatar1 from "../../../assets/images/users-avatar/1.jpg"
import userAvatar2 from "../../../assets/images/users-avatar/2.jpg"
import userAvatar3 from "../../../assets/images/users-avatar/3.webp"
import userAvatar4 from "../../../assets/images/users-avatar/4.webp"
import userAvatar5 from "../../../assets/images/users-avatar/5.jpg"
import userAvatar6 from "../../../assets/images/users-avatar/6.jpg"
import userAvatar7 from "../../../assets/images/users-avatar/7.webp"
import userAvatar8 from "../../../assets/images/users-avatar/8.jpg"
import userAvatar9 from "../../../assets/images/users-avatar/9.jpg"
import userAvatar10 from "../../../assets/images/users-avatar/10.jpg"

const avatars = [
    userAvatar1,
    userAvatar2,
    userAvatar3,
    userAvatar4,
    userAvatar5,
    userAvatar6,
    userAvatar7,
    userAvatar8,
    userAvatar9,
    userAvatar10,
];

export const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
};