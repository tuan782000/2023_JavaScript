// Đây là cách lấy dữ liệu xử bất đồng bằng async await

const fetchUser = async () => {
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();
    console.log(data)
}

fetchUser()