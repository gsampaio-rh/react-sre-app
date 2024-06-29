// services/checkRule.js
import ruleData from '../assets/data/rule.json';

const checkSpecificRule = () => {
    const specificRuleId = "abort_command_issued|ABORT_COMMAND_ISSUED";
    const specificRule = ruleData.data.find(rule => rule.rule_id === specificRuleId);

    if (specificRule) {
        console.log(`The rule "${specificRuleId}" is found.`);
    } else {
        console.log(`The rule "${specificRuleId}" is not found.`);
    }
};

export default checkSpecificRule;
