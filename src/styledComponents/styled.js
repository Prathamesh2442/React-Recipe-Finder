import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;
export const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: cursive;
  font-size: 18px;
`;
export const SeeMoreText = styled.span`
  font-size: 18px;
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
  background: black;
  border-radius: 60px;
  color: #FFE;
  font-family: cursive;
`;

export const IngredientsText = styled(SeeMoreText)`
  margin-bottom: 12px;
  margin-bottom: 12px;
  background: darkred;
  color: #fff;
  font-family: cursive;
  border-radius: 60px;
`;
export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Header = styled.div`
  background-color: rgba(0,0,0,0.8);;
  color: white;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 52px 22px #555;
  width: 100%;
  position: fixed;
  top: 0;
  font-family: 'Lobster', cursive;
  font-size: 32px;
  letter-spacing: 2px;
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  font-family:cursive;
  margin-left: 20px;
  margin-right: 1rem;
  width: 50%;
  background-color: white;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const RecipeImage = styled.img`
  width: 54px;
  height: 62px;
  margin: 0 0.3rem;
  margin-right: 0.5rem;
`;
export const Placeholder = styled.img`
  width: 295px;
  height: 314px;
  margin: 105px;
  opacity: 68%;
`;
export const SearchInput = styled.input`
  color: black;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  border: none;
  outline: none;
  margin-left: 15px;
  font-family: 'Courier New', Courier, monospace;
`;
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
  margin-top:8rem;
`;
