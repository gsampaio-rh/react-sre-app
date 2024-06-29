import ruleData from '../assets/data/rule.json';

const checkSpecificRule = () => {
    const ruleToRoomMapping = {
        "abort_command_issued|ABORT_COMMAND_ISSUED": "Sala Verde"
    };

    const specificRuleId = "abort_command_issued|ABORT_COMMAND_ISSUED";
    const specificRule = ruleData.data.find(rule => rule.rule_id === specificRuleId);

    if (specificRule) {
        console.log(`The rule "${specificRuleId}" is found.`);
        return ruleToRoomMapping[specificRuleId];
    } else {
        console.log(`The rule "${specificRuleId}" is not found.`);
        return null;
    }
};

export default checkSpecificRule;
