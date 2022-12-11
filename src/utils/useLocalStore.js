import {useState,useEffect} from "react"

export default function useLocalStore(){
    const [PLAYER_SCORE, setPLAYER_SCORE] = useState(0);
    
    useEffect(() => {
        let savedScore = localStorage.getItem("PLAYER_SCORE", PLAYER_SCORE);
        
        if (savedScore) {
          setPLAYER_SCORE(savedScore);
        }
        return () => {};
      }, []);
    useEffect(() => {
        
        if (PLAYER_SCORE) {
          localStorage.setItem("PLAYER_SCORE", PLAYER_SCORE);
        }
    
        return () => {};
      }, [PLAYER_SCORE]);
      return [PLAYER_SCORE, setPLAYER_SCORE]

}