import {useState} from "react";
import {RadioGroup} from "./components/radio-group/RadioGroup";

function App() {
    const [order, setOrder] = useState({
        meal: "",
        bread: "",
        side: "",
        beverage: ""
    });

    const onChange = (name) => (value) => {
        setOrder({...order, [name]: value});
    }

  return (
      <main>
        <h1>Breakfast</h1>
        <h2>Meal</h2>
        <RadioGroup name="meal" onChange={onChange("meal")}>
            <RadioGroup.Option value="small">
                Small: $5.99
            </RadioGroup.Option>
            <RadioGroup.Option value="medium">
                Medium: $7.99
            </RadioGroup.Option>
            <RadioGroup.Option value="small">
                Large: $9.99
            </RadioGroup.Option>
        </RadioGroup>

          <h2>Bread</h2>
          <RadioGroup name="bread" onChange={onChange("bread")}>
              <RadioGroup.Option value="bagel">
                  Bagel
              </RadioGroup.Option>
              <RadioGroup.Option value="roll">
                  Roll
              </RadioGroup.Option>
              <RadioGroup.Option value="croissant" isPopular>
                  Croissant
              </RadioGroup.Option>
          </RadioGroup>

          <h2>Side</h2>
          <RadioGroup name="side" onChange={onChange("side")}>
              <RadioGroup.Option value="avocado" icon="🥑">
                  Avocado
              </RadioGroup.Option>
              <RadioGroup.Option value="bacon" icon="🥓">
                  Bacon <em>(+ $0.99)</em>
              </RadioGroup.Option>
          </RadioGroup>

          <h2>Beverage</h2>
          <RadioGroup name="beverage" onChange={onChange("beverage")}>
              <RadioGroup.Option value="orangejuice">
                  Orange juice
              </RadioGroup.Option>
              <RadioGroup.Option value="coffee">
                  Coffee
                  <RadioGroup.Details>
                      <select name="coffee_size">
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                  </RadioGroup.Details>
              </RadioGroup.Option>
          </RadioGroup>
      </main>
  )
}

export default App;
