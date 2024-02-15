
const RecentprojectTitle = ({ProjectTitle, porjectDiscripiton}) => {
    return (
        <div>
            <div>
                <h2 className="p-2 text-3xl capitalize">{ProjectTitle}</h2>
                <p className="p-2  uppercase">{porjectDiscripiton}</p>
            </div>
        </div>
    );
};

export default RecentprojectTitle;