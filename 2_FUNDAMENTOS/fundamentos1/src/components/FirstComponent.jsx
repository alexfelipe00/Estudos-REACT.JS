import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro componente</h1>

            {/* Importando um componente em outro, criando uma hierarquia de componentes*/}
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;