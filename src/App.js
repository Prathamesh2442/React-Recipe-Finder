import React, { useState, useEffect } from "react";
import Axios from "axios";
import {SearchBox, SearchIcon, SearchInput, RecipeListContainer,Placeholder, RecipeContainer, RecipeName, SeeNewTab, SeeMoreText, Container, Header, AppName, RecipeImage, CoverImage, IngredientsText} from "./styledComponents/styled";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import "./stylesheet/selector.css";
import "./stylesheet/index.css";

const APP_ID = "04650b30";
const APP_KEY = "3610d1e0f96d8a74c8de794be00f8b43";

const RecipeComponent = (props) => {
  const [show, setShow] = useState("");

  const { label, image, ingredients, url } = props.recipe;
  return (
    <RecipeContainer>
      <Dialog
        onClose={() => console.log("adsadad")}
        aria-labelledby="simple-dialog-title"
        open={!!show}
      >
        <DialogTitle>Ingredients</DialogTitle>
        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Happy Cooking :)</b>
        <DialogContent>
          <RecipeName>{label}</RecipeName>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeNewTab onClick={() => window.open(`https://www.youtube.com/results?search_query=${label}`)}>Search on YT</SeeNewTab>
          <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <CoverImage src={image} alt={label} />
      <RecipeName>{label}</RecipeName>
      <IngredientsText onClick={() => setShow(!show)}>
        Ingredients
      </IngredientsText>
      <SeeMoreText onClick={() => window.open(url)}>
        See Complete Recipe
      </SeeMoreText>
    </RecipeContainer>
  );
};
const AppComponent = () => {

  useEffect(() => {
    alert("Welcome to it's Delicious Recipe-finder-app!!");
  }, [])

  const [searchQuery, updateSearchQuery] = useState("");   
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState(); 
  const [choice, setchoice] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };
    
  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <RecipeImage src="/react-recipe-finder/hamburger.svg" />
          it's Delicious..
        </AppName>
        <>
          <select id="day-meal" value={choice} onChange={(event) => {
            setchoice(event.target.value);
          }}>
            <option value="All">All</option>
            <option value="Breakfast food">Breakfast food</option>
            <option value="Lunch food">Lunch food</option>
            <option value="Dinner food">Dinner food</option>
            <option value="Ice Creams">Ice Creams</option>
            <option value="Regional food">Regionwise</option>
            <option value="Veg food">Veg food</option>
            <option value="Non-veg food">Non veg food</option>
          </select>
        </>
        <SearchBox>
          <SearchIcon src="/react-recipe-finder/search-icon.svg" />
          <SearchInput
            placeholder="Search recipe!"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      <RecipeListContainer>
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <Placeholder src="/react-recipe-finder/face-surprise.svg" />
        )}
      </RecipeListContainer>
      <>
        <div id="feed">
          <div className="ifeed">
            <button onClick={window['active']} id="btn" className="btn1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              className="bi bi-info-square-fill" viewBox="0 0 16 16">
              <path
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg></button>
          </div>
        </div>
        <div className="o-container">
          <div id="i-container" className="i-container">
            <div className="cross" onClick={window['deactive']}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
              <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg></div>
            <h2>Want to Share?</h2>
            <p>Chat with us - it'sDelicious team would like to <br />know your Cooking Experience!!</p>
            <div className="info">
              <input type="text" name="" className="box" placeholder="Your Name" />
              <input type="text" name="" className="box" placeholder="Your Email" />
              <textarea type="text" className="tbox" placeholder="Type in your feedback here.."></textarea>
              <button onClick={window['submit']}>Send feedback</button>
            </div>
          </div>
        </div>
        <div id="chat">
          <div className="innerchat" onClick={window['start']}>
            <button onClick={window['start']} id="btn" className="btn2"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
            </svg></button>
          </div>
        </div>

        <div className="chatbox">
          <div className="upper">
            <div className="cross" onClick={window['stop']}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
              <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg></div><RecipeImage src="react-recipe-finder/chatbot.svg" />
            <h3>Welcome there, How can I help you?</h3>
          </div>
          <div className="middle">
            <div className="mfirst">I got a problem, Can you help me?</div>
            <div className="msecond">Ofcourse, What happen?</div>
            <div className="mfirst">Which type of mushroom should i use in pizza..</div>
            <div className="msecond">1/2 cup of sliced mushroom, don't use canned mushroom</div>
            <div className="mfirst">Can you suggest best cheese?</div>
            <div className="msecond">Always, use mozzrella</div>
            <div className="mfirst">ok thanks!!</div>
            <div className="mfirst">You can refer our Ingredient list, Happy Cooking :)</div>
            <div className="msecond">Definitely!</div>
          </div>
          <div className="bottom">
            <input type="text" placeholder="Write a message" /><span><svg onClick={()=>window.open("https://www.google.co.in/imghp?hl=en&ogbl")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
            </svg></span><span onClick={window['show']}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z" />
            </svg></span>
          </div>
        </div>
      </>
    </Container>
  );
};
export default AppComponent;

