
import {Router} from 'express';
import { deleteMovie, getMovie, 
            getMovies, saveMovie, 
            updateMovie } 
        from '../controllers';


const router = Router(); // this router help us to define urls 

// We define the url who will be working with the methods like get, post, delete
router.get('/movies', getMovies); // we get all movies

router.get('/movies/:id', getMovie); // we get a specify movie according to the id we need to pass the id

router.post('/movies', saveMovie); // path to create a movie because we use the method post 

router.put('/movies/:id', updateMovie); // upgrade a movie

router.delete('/movies/:id', deleteMovie); // Delete a movie

export default router;
