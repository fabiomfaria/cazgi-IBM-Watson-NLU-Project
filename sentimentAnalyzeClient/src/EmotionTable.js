import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                Object.entries(this.props.emotions).map(function(mapentry) {
<<<<<<< HEAD
                  return (
                      <tr>
                      <td>{mapentry[0]}</td>
                      <td>{mapentry[1]}</td>
                      </tr>
                  )
                  })
=======
                return (
                    <tr>
                    <td>{mapentry[0]}</td>
                    <td>{mapentry[1]}</td>
                    </tr>
                )
                })
>>>>>>> b3864c8ec6d77e367035433a4597969a57d8d2ef
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;