import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [booksList, setBooksList] = useState([]);
    const [user, setUser] = useState(null);

    const fetchBooksList = async () => {
        try {
            const response = await axios.get(`${url}/api/books/list`);
            setBooksList(response.data.data);
        } catch (error) {
            console.error("Error fetching books list:", error);
        }
    };

    const addIssued = async (bookId) => {
        if (token) {
            await axios.post(url + "/api/issued/add", {bookId}, {headers: {token}})
        }
    }

    const removeIssued = async (bookId) => {
        if (token){
            await axios.post(url + "/api/issued/remove", {bookId}, {headers: {token}})
        }
    }

    const getIssued = async () => {
        if (token) {
            let issuedData = [];
            for (const key in user.issuedData) {
                if (user.issuedData.hasOwnProperty(key)) {
                    let value = new Date(user.issuedData[key]);
                    try {
                        const response = await axios.post(url + "/api/books/find", { "id":key });
                        if (response.data.success) {
                            let date = value.getDate();
                            let month = value.getMonth() + 1;
                            let year = value.getFullYear();
                            let issueDate = `${date}/${month}/${year}`;
                            
                            value.setDate(value.getDate() + 7);
                            
                            let date1 = value.getDate();
                            let month1 = value.getMonth() + 1;
                            let year1 = value.getFullYear();
                            
                            let returnDate = `${date1}/${month1}/${year1}`;
                            
                            const bookInfo = {
                                "name": response.data.data.name,
                                "genre": response.data.data.genre,
                                "issuedOn": issueDate,
                                "returnBy": returnDate
                            };
                            
                            issuedData.push(bookInfo);
                        } else {
                            console.error("Error finding book:", response.data.message);
                        }
                    } catch (error) {
                        console.error("Error fetching book data:", error.message);
                    }
                }
            }
            return issuedData;
        }
    };

    const addHistory = async (bookId, date) => {
        if (token) {
            await axios.post(url + "/api/history/add", {bookId, date}, {headers: {token}})
        }
    }

    const removeHistory = async (bookId) => {
        if (token){
            await axios.post(url + "/api/history/remove", {bookId}, {headers: {token}})
        }
    }

    const clearHistory = async () => {
        if (token){
            await axios.post(url + "/api/history/clear", {headers:{token}})
        }
    }

    const getHistory = async () => {
        if (token) {
            let historyData = [];
            for (const key in user.historyData) {
                if (user.historyData.hasOwnProperty(key)) {
                    let value = new Date(user.historyData[key]);
                    try {
                        const response = await axios.post(url + "/api/books/find", { "id":key });
                        if (response.data.success) {
                            let date = value.getDate();
                            let month = value.getMonth() + 1;
                            let year = value.getFullYear();
                            let issueDate = `${date}/${month}/${year}`;
                            
                            value.setDate(value.getDate() + 7);
                            
                            let date1 = value.getDate();
                            let month1 = value.getMonth() + 1;
                            let year1 = value.getFullYear();
                            
                            let returnDate = `${date1}/${month1}/${year1}`;
                            
                            const bookInfo = {
                                "name": response.data.data.name,
                                "genre": response.data.data.genre,
                                "issuedOn": issueDate,
                                "returnedOn": returnDate,
                                "status": "Returned"
                            };
                            
                            historyData.push(bookInfo);
                        } else {
                            console.error("Error finding book:", response.data.message);
                        }
                    } catch (error) {
                        console.error("Error fetching book data:", error.message);
                    }
                }
            }
            return historyData;
        }
    }

    const getFullHistory = async () => {
        if (!token) {
            console.error("Token is not available");
            return [];
        }
    
        const fetchBookData = async (key, issueDate, status) => {
            try {
                const response = await axios.post(`${url}/api/books/find`, { id: key });
                if (response.data.success) {
                    const bookData = response.data.data;
                    const returnDate = new Date(issueDate);
                    returnDate.setDate(returnDate.getDate() + 7);
    
                    return {
                        name: bookData.name,
                        image: bookData.image,
                        author: bookData.author,
                        genre: bookData.genre,
                        issuedOn: issueDate.toLocaleDateString(),
                        returnedOn: returnDate.toLocaleDateString(),
                        status
                    };
                } else {
                    console.error("Error finding book:", response.data.message);
                }
            } catch (error) {
                console.error("Error fetching book data:", error.message);
            }
        };
    
        const fullHistoryData = [];
    
        for (const key in user.issuedData) {
            if (user.issuedData.hasOwnProperty(key)) {
                const issueDate = new Date(user.issuedData[key]);
                const bookInfo = await fetchBookData(key, issueDate, "Issued");
                if (bookInfo) {
                    fullHistoryData.push(bookInfo);
                }
            }
        }
    
        for (const key in user.historyData) {
            if (user.historyData.hasOwnProperty(key)) {
                const issueDate = new Date(user.historyData[key]);
                const bookInfo = await fetchBookData(key, issueDate, "Returned");
                if (bookInfo) {
                    fullHistoryData.push(bookInfo);
                }
            }
        }
    
        return fullHistoryData;
    };
    

    const getUserInfo = async () => {
        if (token) {
            try {
                const response = await axios.get(`${url}/api/user/info`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.data.success) {
                    setUser(response.data.data);
                    console.log(response.data.data);
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        }
    };

    useEffect(() => {
        const loadData = async () => {
            await fetchBooksList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
            }
        };

        loadData();
    }, []);

    useEffect(() => {
        const loadUserInfo = async () => {
            if (localStorage.getItem("token")) {
                await getUserInfo();
            }
        };

        loadUserInfo();
    }, [token]);

    const contextValue = {
        booksList,
        setBooksList,
        url,
        token,
        setToken,
        user,
        setUser,
        addIssued,
        removeIssued,
        getIssued,
        addHistory,
        removeHistory,
        clearHistory,
        getHistory,
        getFullHistory
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
