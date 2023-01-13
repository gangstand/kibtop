import Text from "../../../Elementes/Text/Text";

const WorkParameter = ({categoryName, subCategoryName, employment}) => {
    return (
        <>
            <div className="detail-parameter">
                <h4 className="detail-title"><Text content="parameter" /></h4>

                <div className="detail-parameter__grid">
                    <p className="detail-tag-text">
                        <Text content="Category" />:<span className="detail-tag-text--black">Electronics</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Employment" />:<span className="detail-tag-text--black">TV / Photo / Video / Audio</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Profession" />:<span className="detail-tag-text--black">TV / Photo / Video / Audio</span>
                    </p>
                </div>
                
                
            </div>
        </>
    );
}

export default WorkParameter;