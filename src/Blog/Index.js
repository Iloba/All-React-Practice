import React, { useEffect, useState } from 'react'
import './style.scss'
import Avatar from './assets/avatar.svg'
import Loader from './assets/Iphone-spinner-2.gif'
import { getPosts, storePosts } from './Services/news'
import swal from 'sweetalert'
import News from './News'
const Index = () => {
    const [inputState, setInputState] = useState({
        name: "",
        news: ""
    });
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [btnDisabled, setBtnDisabled] = useState(false);

    const HandleInput = (event) => {
        setInputState({
            ...inputState,
            [event.target.name]: event.target.value,
        })

    }

    //Refactor
    const validateInput = (inputData) => { //TODO
        


        
    }

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        //Validate
        
        

        // if(inputState.name.trim().length === 0){
        //     swal({
        //         title: "error!",
        //         text: 'Please Input Name',
        //         icon: "error",
        //     });
        //     return;
        // }
        validateInput(inputState.name);
        validateInput(inputState.news);

        // if(inputState.news.trim().length === 0){ 
        //     swal({
        //         title: "error!",
        //         text: 'Please Input News',
        //         icon: "error",
        //     });
        //     return;
        // }
        let formData = new FormData();
        formData.append("name", inputState.name);
        formData.append("news", inputState.news);
        try {
            setBtnDisabled(true);
            const response = await storePosts(formData);
            swal({
                title: "success!",
                text: response.data.message,
                icon: "success",
            });
            setBtnDisabled(false);
        } catch (error) {
            console.log(error)
        }

        setInputState({
            name: '',
            news: ''
        })

    }

    //get Data and Display
    useEffect(() => {
        const getNotes = async () => {
            try {
                const response = await getPosts();
                console.log(response);
                setAllData(response.data.news);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getNotes();
    }, []);
    let dataMarkup = '';
    if(loading){
        dataMarkup = <img className='mx-auto d-block' src={Loader} alt="loading"/>
    }else{
        dataMarkup = allData.map((news, index) => {
            return  <News news={news.news} name={news.name} key={"notes" + index} />
          })
    }

    return (<div className='container'>
        <div className='row  d-flex justify-content-center gx-5 mt-5'>
            <div className='col-md-8 mt-5 '>
                <div className='form-box bg-light'>
                    <h1 className='mb-5'>Emeka Iloba's News Blog</h1>
                    <form onSubmit={handleFormSubmission}>
                        <input name="name" type="text" className='form-control mb-3' placeholder='Enter Your Name' onChange={HandleInput} value={inputState.name} />
                        <textarea name="news" className='form-control mb-3' id="" cols="30" rows="10" placeholder='Enter News' onChange={HandleInput} value={inputState.news}></textarea>
                        <button className={btnDisabled ? 'd-none': 'd-block news-btn'} >Add News</button>
                    </form>
                </div>
            </div>
            <div className='col-md-4 news-box mt-5 bg-light'>
                <h1 className='mt-5'> list of News</h1>
                {dataMarkup}
            </div>
        </div>

    </div>)
}
export default Index;