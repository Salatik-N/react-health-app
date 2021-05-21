import React, {Component} from "react"
import { Form, Col, Button, Carousel } from "react-bootstrap"

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
          gender: 'male',
          exercise: 'ex-1',
          weight_select: 'ws-1',
          pregnant: "no",
          height: '',
          weight: '',
          age: '',
          resultedBMR: '',
          resultedProteins: '',
          resultedFats: '',
          resultedCarbohydrates: '',
          validated: false
        }
        this.onParametersChange = this.onParametersChange.bind(this)
        this.onCalculate = this.onCalculate.bind(this)
      }
    
      onParametersChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }
    
      onCalculate(event) {
        event.preventDefault();
        let { gender, age, height, weight, exercise, weight_select, pregnant } = this.state,
          bmr = 0, bmrFinish = 0, Proteins = 0, Fats = 0, Carbohydrates = 0
        if (age && height && weight !=='') {
          if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5
          } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161
          }
          if (exercise === 'ex-1') {
            bmrFinish = bmr * 1.2
          }
          if (exercise === 'ex-2') {
            bmrFinish = bmr * 1.375
          }
          if (exercise === 'ex-3') {
            bmrFinish = bmr * 1.55
          }
          if (exercise === 'ex-4') {
            bmrFinish = bmr * 1.725
          }
          if (exercise === 'ex-5') {
            bmrFinish = bmr * 1.9
          }
        }
        if (pregnant !== 'no'){
          if (pregnant === 'pr-1'){
            bmrFinish = bmrFinish + 85
          }
          if (pregnant === 'pr-2'){
            bmrFinish = bmrFinish + 285
          }
          if (pregnant === 'pr-3'){
            bmrFinish = bmrFinish + 475
          }
          if (pregnant === 'pr-4'){
            bmrFinish = bmrFinish + 500
          }
          Proteins = bmrFinish * 0.3 / 4
          Fats = bmrFinish * 0.3 / 9
          Carbohydrates = bmrFinish * 0.4 / 4
        }else {
          if (weight_select === 'ws-1'){          
          Proteins = bmrFinish * 0.3 / 4
          Fats = bmrFinish * 0.3 / 9
          Carbohydrates = bmrFinish * 0.4 / 4
        }
        if (weight_select === 'ws-2'){
          bmrFinish = bmrFinish - (bmrFinish * 0.15)
          Proteins = bmrFinish * 0.3 / 4
          Fats = bmrFinish * 0.2 / 9
          Carbohydrates = bmrFinish * 0.5 / 4
        }
        if (weight_select === 'ws-3'){
          bmrFinish = bmrFinish + (bmrFinish * 0.2)
          Proteins = bmrFinish * 0.3 / 4
          Fats = bmrFinish * 0.3 / 9
          Carbohydrates = bmrFinish * 0.4 / 4
        }}
        this.setState({resultedProteins: Math.round(Proteins)})
        this.setState({resultedFats: Math.round(Fats)})
        this.setState({resultedCarbohydrates: Math.round(Carbohydrates)})
        this.setState({resultedBMR: Math.round(bmrFinish)})
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        this.setState({
          validated:true
        });
      }

    render(){
    return (
    <div>
        <div className="block-cards">
              <div className="item-card item-card-form">
              <Form noValidate validated={this.state.validated} onSubmit={this.onCalculate.bind(this)}>
                <Form.Row className="justify-content-center">
                  <h4 className="mb-3">Введите данные для расчета BMR</h4>
                  <Form.Group as={Col} md="12" controlId="formBasicAge">
                    <Form.Control 
                      required
                      name="age"
                      type="number" 
                      placeholder="Сколько вам лет?"
                      value={this.state.age}
                      onChange={this.onParametersChange}/>
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="formBasicHeight">
                  <label className="units_label">в см</label>
                    <Form.Control 
                    required 
                    name="height"
                    type="number" 
                    placeholder="Ваш рост"
                    value={this.state.height}
                    onChange={this.onParametersChange}/>
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="formBasicWeight">
                    <label className="units_label">в кг</label>
                    <Form.Control 
                    required 
                    name="weight"
                    type="number"
                    placeholder="Ваш вес"
                    value={this.state.weight}
                    onChange={this.onParametersChange} />
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="formBasicGender">
                    <Form.Control 
                    name="gender"
                    as="select"
                    value={this.state.gender}
                    onChange={this.onParametersChange}>
                      <option 
                      value="male">Мужчина</option>
                      <option
                      value="female">Женщина</option>
                    </Form.Control>
                  </Form.Group>

                  {this.state.gender === "female" && 
                  <Form.Group as={Col} md="12" controlId="formBasicFemale">
                    <label >Беременность</label>
                    <Form.Control 
                    name="pregnant"
                    as="select"
                    value={this.state.pregnant}
                    onChange={this.onParametersChange}>
                      <option
                      value="no">Нет</option>
                      <option
                      value="pr-1">Первый триместр беременности</option>
                      <option
                      value="pr-2">Второй триместр беременности</option>
                      <option
                      value="pr-3">Третий триместр беременности</option>
                      <option
                      value="pr-4">Грудное вскармливание</option>
                    </Form.Control>
                  </Form.Group>}

                  <Form.Group as={Col} md="12" controlId="formBasicExercise ">
                    <label >Ваша физическая активность</label>
                    <Form.Control 
                    name="exercise"
                    as="select"
                    value={this.state.exercise}
                    onChange={this.onParametersChange}>
                      <option
                      value="ex-1">Сидячий образ жизни без нагрузок</option>
                      <option
                      value="ex-2">Тренировки 1-3 раза в неделю || Умеренная активность</option>
                      <option
                      value="ex-3">Тренировки 3-5 раз в неделю || Активность выше средней</option>
                      <option
                      value="ex-4">Интенсивные тренировки 6-7 раз в неделю || Высокая активность</option>
                      <option
                      value="ex-5">Ваша работа связана с физическим трудом, выполняете упражнения чаще, чем раз в день</option>
                    </Form.Control>
                  </Form.Group>

                  {this.state.pregnant !== "no" || 
                  <Form.Group as={Col} md="12" controlId="formBasicWeight_Select">
                    <label >Вы хотите похудеть или набрать массу?</label>
                    <Form.Control 
                    name="weight_select"
                    as="select"
                    value={this.state.weight_select}
                    onChange={this.onParametersChange}>
                      <option
                      value="ws-1">Поддержание веса</option>
                      <option
                      value="ws-2">Сжигание веса</option>
                      <option
                      value="ws-3">Набор массы</option>
                    </Form.Control>
                  </Form.Group>}

                  <Button 
                    variant="primary" 
                    type="submit"
                    onClick={this.onCalculate.bind(this)}>
                      Рассчитать
                  </Button>
                  {this.state.pregnant !== "no" && this.state.gender === "female" &&
                  <p className="pregnant-info">
                    Предложения или расчеты на этой странице являются только руководством - вы всегда должны консультироваться с врачом или диетологом по вопросам, влияющим на здоровье вашего ребенка.
                  </p>}
                </Form.Row>
              </Form> 
              </div>

              <div className="item-card-res item-card">
              {this.state.resultedBMR !== 0 && this.state.resultedBMR!== ''  ?
                <div className="cKal-result">
                  <span>Ежедневная норма килокалорий</span>
                  <span className="result-number">{this.state.resultedBMR}</span> 
                  <div className="row">
                    <div className="bju_result">
                      <label>Белков</label>
                      <span className="result-number text-primary">{this.state.resultedProteins}</span>
                    </div>
                    <div className="bju_result">
                      <label>Жиров</label>
                      <span className="result-number text-danger">{this.state.resultedFats}</span> 
                      </div>
                    <div className="bju_result">
                      <label>Углеводов</label>
                      <span className="result-number text-warning">{this.state.resultedCarbohydrates}</span> 
                      </div>
                  </div>
                </div> 
                : 
                <div className="cKal-result">
                  <span>Введите все данные</span>
                </div>
              }
              </div>
              <Carousel>
                <Carousel.Item>
                
                </Carousel.Item>
              </Carousel>
            </div>
    </div>
    )
    }
}

export default Main