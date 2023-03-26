import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg'; //parcel 1s

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your search. Please try again!';
  _message = '';

  _generateMarkUp() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
